// MONGO RELATIONSHIPS explain
// In MongoDB, relationships between data can be represented in several ways, including embedded documents and
// references.
// ONE TO MANY RELATIONSHIP
// This code demonstrates a one-to-many relationship using references.

const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => 
            console.log('Database connection established'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/relationDemo');` if your database has auth enabled    
    console.log('Connected to MongoDB');
}

const orderSchema = new Schema({
    item : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    } 
});

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    orders: [{
        type: Schema.Types.ObjectId,  // Reference to Order model. populate will be used to fetch related orders. objectId is a unique identifier for each order.
        ref: 'Order'
    }]
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = { Order, Customer };

const addcustomer = async () => {
    const order1 = new Order({ item: 'Laptop', price: 1200 });
    const order2 = new Order({ item: 'Phone', price: 800 });
    await order1.save();
    await order2.save();

    const customer = new Customer({
        name: 'Jane Doe',
        orders: [order1._id, order2._id] // Storing references to the orders
    });

    await customer.save();
    console.log('Customer added:', customer);
};

addcustomer()
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err));
// This code connects to a MongoDB database, defines a Customer model with a one-to-many relationship
// to orders, and adds a customer with multiple orders to the database.

const addorder = async () => {
   await Order.insertMany([
        { item: 'Laptop', price: 1200 },
        { item: 'Phone', price: 800 },
        { item: 'Tablet', price: 600 }
    ]);
    console.log('Orders added');
}

addorder()
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err));