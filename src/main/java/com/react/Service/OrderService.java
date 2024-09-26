package com.react.Service;

import java.util.List;

import com.react.Model.Address;
import com.react.Model.Order;
import com.react.Model.User;

public interface OrderService {

	public Order createOrder(User user,Address shippAddress);
	public Order findOrderById(Long orderId);
	public List<Order>userOrderHistory(Long userId);
	public Order placedOrder(Long orderId);
	public Order confirmedOrder(Long orderId);
	public Order shippedOrder(Long orderId);
	public Order deliveredOrder(Long orderId);
	public Order canceledOrder(Long orderId);
	public List<Order> getAllOrders();
	public void deleteOrder(Integer orderId);
}
