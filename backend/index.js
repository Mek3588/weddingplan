const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));


const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

//adminschema
const adminSchema = mongoose.Schema({
  firstName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
}); 


//userschema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image1: String,
    image2: String,
  });  


  //MODEL for user
const userModel = mongoose.model("user", userSchema);

//deleteusers
app.delete("/users/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const deletedUser = await userModel.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


  //MODEL for admin
const adminModel = mongoose.model("admin", adminSchema);


 //featch users
 app.get("/Users", async (req, res) => {
  try {
    const data = await userModel.find({});
  res.send(JSON.stringify(data));
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: "Internal server error" });
  }
});



//api
app.get("/", (req, res) => {
    res.send("Server is running");
  });


//signup
app.post('/signup', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    // Handle any errors that occurred during the query or save
    console.error(error);
    res.status(500).send({ message: "An error occurred", alert: false });
  }
});


//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});

 //MODEL for product
const productModel = mongoose.model("product",schemaProduct)

//save product in data 
//api
app.post("/uploadProduct",async(req,res)=>{
   console.log(req.body)
  const data = await productModel(req.body)
  const datasave = await data.save()
  res.send({message : "Upload successfully"})
})

//fetchdata
app.get("/Product",async(req,res)=>{
const data = await productModel.find({})
res.send(JSON.stringify(data))
})

const vendorSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  // Add other fields for vendor information
});

const Vendor = mongoose.model("Vendor", vendorSchema);

// Create a new route to handle vendor creation
app.post("/vendors", async (req, res) => {
  try {
    // Extract vendor data from request body
    const { name, email, password } = req.body;

    // Check if the email already exists in the database (duplicate email check)

    // Create a new vendor instance
    const vendor = new Vendor({
      name,
      email,
      password,
      // Add other vendor-related fields here
    });

    // Save the vendor to the database
    await vendor.save();

    res.json({ message: "Vendor account created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image1: result.image1,
        image2: result.image2,
      };

      console.log(dataSend);

      res.status(200).send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.status(404).send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error occurred during login",
      alert: false,
    });
  }
});

  app.listen(PORT, () => console.log("server is running at port : " + PORT));