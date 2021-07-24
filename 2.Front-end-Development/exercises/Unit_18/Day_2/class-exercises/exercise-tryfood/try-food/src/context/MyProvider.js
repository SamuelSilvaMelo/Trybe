// OBS: Exercício feito com (muito) auxílio do gabarito;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.splice(indexPresentInList, 1);
    setOrderList({
      ...orderList,
      [itemType]: orderState,
    });
  };

  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    orderState.splice(indexPresentInList, 1, newItem);
    setOrderList({
      ...orderList,
      [newItem.itemType]: orderState,
    });
  };

  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    }
    updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  const addItemToList = (newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem],
    });
  };

  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    const isPresentInList = orderList[itemType].some((item) => item.id === newItem.id);

    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
