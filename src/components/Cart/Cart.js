import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, total, currency }) => {
    return (
        <div>
            <h3>Courses Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ol>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ol>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} Naira</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Cart;
