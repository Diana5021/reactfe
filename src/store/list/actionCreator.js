import {
  SET_CART,
  SET_FAVORITElIST,
  // SET_ORDER 
} from './actionTypes'

import _ from 'lodash'

let { cart, favorite, order } = JSON.parse(sessionStorage.getItem('shoplist')) || {cart:[], favorite:[], order:[]}

export const getCart = cart => {
  sessionStorage['shoplist'] = JSON.stringify({cart, favorite,order})
  return {
    type: SET_CART,
    cart
  }
}

export const getSeCart = () => {
  return dispatch => {
    dispatch(getCart(cart))
  }
}

export const changeChosen = (isChosen) => {
  cart.forEach(value=> {
    value.isChosen = isChosen
  })
  return dispatch => {
    dispatch(getCart(cart))
  }
}

export const changeOneChosen = (id) => {
  let opt = cart.find((value) => {
    return value.id === id
  })
  opt.isChosen = !opt.isChosen
  return dispatch => {
    dispatch(getCart(cart))
  }
}

export const deleteOneShop = (id) => {
  _.remove(cart,(value) => {
    return value.id === id
  })
  return dispatch => {
    dispatch(getCart(cart))
  }
}

export const changeOneNumber = ({id,num}) => {
  let opt = cart.find((value) => {
    return value.id === id
  })
  opt.num = num
  return dispatch => {
    dispatch(getCart(cart))
  }
}

export const setCart = (shop) => {
  let isexit = cart.find(value => {
    return value.id === shop._id
  })
  if(!isexit) {
    let obj = {
      id: shop._id,
      name: shop.Description,
      img: shop.Picture[0].url,
      num: 1,
      type: shop.GoodsType,
      price: shop.UnitPrice.toFixed(2),
      isChosen: true
    }
    cart.push(obj)
  } else {
    isexit.num ++
  }
  return dispatch => {
    dispatch(getCart(cart))
  }
}


export const getFavorite = favorite => {
  sessionStorage['shoplist'] = JSON.stringify({cart, favorite,order})
  return {
    type: SET_FAVORITElIST,
    favorite
  }
}

export const getSeFavorite = () => {
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}

export const setFavorite = shop => {
  let isexit = favorite.find(value => {
    return value.id === shop._id
  })
  if(!isexit) {
    let obj = {
      id: shop._id,
      name: shop.Description,
      img: shop.Picture[0].url,
      type: shop.GoodsType,
      price: shop.UnitPrice.toFixed(2),
      isChosen: false
    }
    favorite.push(obj)
  } 
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}

export const setFavoriteSeco = shop => {
  let isexit = favorite.find(value => {
    return value.id === shop.id
  })
  if(!isexit) {
    let obj = {
      id: shop.id,
      name: shop.name,
      img: shop.img,
      type: shop.type,
      price: shop.price,
      isChosen: false
    }
    favorite.push(obj)
  } 
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}

export const changeAllFavorite = (isChosen) => {
  favorite.forEach(value=> {
    value.isChosen = isChosen
  })
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}

export const changeOneFavorite = (id) => {
  let opt = favorite.find((value) => {
    return value.id === id
  })
  opt.isChosen = !opt.isChosen
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}

export const deleteFavorite = () => {
  _.remove(favorite,(value) => {
    return value.isChosen
  })
  return dispatch => {
    dispatch(getFavorite(favorite))
  }
}