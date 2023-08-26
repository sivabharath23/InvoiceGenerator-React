import "./styles.css";
import { useState, useEffect } from "react";

const listOfItems = [
  {
    name: "Noodles",
    price: 20
  },
  {
    name: "Sandwich",
    price: 30
  },
  {
    name: "Juice",
    price: 40
  },
  {
    name: "Dosa",
    price: 30
  },
  {
    name: "Masal Dosa",
    price: 70
  }
];

export default function App() {
  const [items, setItems] = useState(listOfItems);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addSelectedItems = (index) => {
    console.log("Type : ", typeof selectedItems);
    const selectedItem = items[index];
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setSelectedItems((prevSelectedItems) => [
      ...prevSelectedItems,
      selectedItem
    ]);
  };

  const DeleteSelectedItems = (index) => {
    console.log("deleteing items");
    const selectedItem = selectedItems[index];
    const newSelectesItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(newSelectesItems);
    setItems((prevItems) => [...prevItems, selectedItem]);
  };

  // useEffect(() => {
  //   console.log("Selected items changed:", selectedItems);
  // }, [selectedItems]);

  const handleAmount = () => {
    let amount = 0;
    selectedItems.forEach((x, i) => {
      console.log(x.price, "Price");
      amount += x.price;
    });
    setTotalAmount(amount);
  };

  useEffect(() => {
    handleAmount();
  }, [selectedItems]);

  return (
    <div className="main-content bg-light ">
      <div className="border shadow rounded p-3 bg-white col-5 me-3 ">
        <h1 className="border-bottom pb-2">Invoice</h1>
        <div className="d-flex justify-content-between h4 border-bottom pb-2">
          <div>
            <span>Item</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <div>
            <span>Add</span>
          </div>
        </div>

        {/* <p>{state}</p> */}
        {items.map((x, i) => {
          return (
            <div
              key={i}
              className="justify-content-between d-flex py-2 border-bottom"
            >
              <div>
                <span>{x.name}</span>
              </div>
              <div>
                <span className="text-center">{x.price}</span>
              </div>
              <button
                className="border-0 btn btn-success"
                onClick={() => addSelectedItems(i)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          );
        })}
      </div>
      <div className="border shadow rounded p-3 bg-white col-6">
        <h1 className="border-bottom pb-2">Selected Items</h1>
        {selectedItems.map((x, i) => {
          return (
            <div key={i}>
              <div className="justify-content-between d-flex px-2 py-2 border-bottom ">
                <span>{x.name}</span>
                <br></br>
                <span className="">{x.price}</span>
                <button
                  className="border-0 text-danger bg-white"
                  onClick={() => DeleteSelectedItems(i)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          );
        })}
        <div className="mt-2">
          <p className="text-dark">Bill Amount: {totalAmount}</p>
        </div>
        {/* <button className="mt-2 btn-success btn ">Total bill</button> */}
      </div>
    </div>
  );
}
