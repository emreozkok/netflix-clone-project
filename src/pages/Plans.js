import { collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Plans.css";

function Plans() {
  const [products, setProducts] = useState(null);

  /*   useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []); */

  useEffect(() => {
    const getPlans = async () => {
      const productsArray = [];
      const querySnapshot = await getDocs(collection(db, "products"), where("active", "==", true));
      querySnapshot.forEach(async (doc) => {
        const productData = { ...doc.data(), ...{ price: 100, id: doc.id } };
        productsArray.push(productData);
        /*     const pricesSnap = await getDocs(collection(db, "prices"));
        pricesSnap.forEach(async (priceDoc) => {
          console.log(priceDoc.data());
        }); */
      });
      setProducts(productsArray);
    };

    getPlans();
  }, []);

  if (products === null) {
    return <div>Loading....</div>;
  }

  return (
    <div className="plan">
      <ul>
        {products.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
            <p>{el.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plans;
