import React, { useEffect, useState } from 'react'
import "./planPage.css"
import db from '../../fireBase/fireBase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { loadStripe } from "@stripe/stripe-js"

const PlanPage = () => {
    // ` To pull the products from data base(fire base)

    const [products,setProducts] = useState([])

    // ` To build plan screen component

    const [subscription, setSubscription] = useState(null)

    useEffect(()=>{
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then(querySnapshot => {
             querySnapshot.forEach(async subscription => {
                setSubscription({
                    role :subscription.data().role,
                    current_period_end : subscription.data().current_period_end.seconds,
                    current_period_start : subscription.data().current_period_start.seconds
                })

             })
         })
    },[])

    // ` To pull the user from redux
    const user = useSelector(selectUser)

    useEffect(()=>{
        db.collection("products")
        .where("active","==",true)
        .get().then(querySnapshot => {
            // ` in this way we can access the products
            const products = {}

                // ` Because we have more than one products
            querySnapshot.forEach(async productDoc =>{
                // ` To access the product data in the db
                products[productDoc.id] = productDoc.data()

                // ` To access the price inside the product
                const priceSnap = await productDoc.ref.collection("prices").get()

                // ` Because we have more than one price
                priceSnap.forEach(priceDoc => {
                    products[productDoc.id].price = {
                        priceId: priceDoc.id,
                        priceData:priceDoc.data()
                       
                    }
                })
            })
 setProducts(products)
        })
    },[])

    // ` We get object
    // console.log(products);

     // `  To get subscription info 
    // console.log(subscription);


    const loadCheckOut = async (priceId) => {
        // ` by using this function we are using the stripe checkout 
        const docRef = await db.collection("customers")
        .doc(user.uid)  //` user from redux
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url : window.location.origin, //` 2 things here are successful and failed subscription so when that happened it will redirect the user to origin screen
            cancel_url : window.location.origin
        })

        docRef.onSnapshot(async (snap)=> {
            const { error,sessionId } = snap.data()

            if(error) {
                alert(`Error: ${error.message}`)
            }
            else if(sessionId) {
                const stripe = await loadStripe("pk_test_51PFQaDF1gwwXFrEcRwo2fwJQSPB9y94Yzs4MPTYPQ6KaLo30fahVryssuXfYAwJpgK6UEAg6J22tG7FRelA0ceJn00CDB79Ucg")

                stripe.redirectToCheckout({ sessionId })
            }
        })

    }


  return (
    <div className='planPage'>
       {subscription && 
       <p> Renewal Date:{new Date(subscription?.current_period_end * 1000).toLocaleDateString()} </p>
       
       }
        {Object.entries(products).map(([productId,productData])=>{
             const isCurrentPackage = productData.name === subscription?.role; // Strict equality check
        
            return (
                <div
                        key={productId}
                        className={`planPage_plan ${isCurrentPackage ? "planPage_plan_disable" : ""}`}>
                <div className="planPage_info">
                    <h5>{productData.name}</h5>
                    <h6>{productData.description}</h6>
                </div>
                <button onClick={() => 
!isCurrentPackage && loadCheckOut(productData.price.priceId)}>

                    {isCurrentPackage ? "Current Package" : "Subscribe"}
                </button>
            </div>
        )
        }
            
        )}


    </div>
  )
}

export default PlanPage