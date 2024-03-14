const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/get_contract_types", async (req, res) => {
  console.log("Fetching data...");
  const url = "https://a15c1e23-06ea-4865-b79d-456d450690d8.trayapp.io";

  try {
    const requestBody = {
      trigger_type: "sd_contract_types",
      internal_bearer_token: "f7c9a21c0d95cb75d08d97678e9cb2a29ebc389d",
      base_url: "598b-45-117-31-170.ngrok-free.app",
    };

    const response = await fetch(url, {
      method: "POST", // Note the lowercase "method" and other properties
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Convert request body to JSON string
    });

    const responseData = await response.json(); // Parse response JSON
    console.log(responseData);
    if (!responseData) {
      throw new Error("Failed to fetch contract types");
    }

    return res.json(responseData);
  } catch (error) {
    console.error("Error fetching contract types:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/get_slack_channels", async (req, res) => {
  const url = "https://a15c1e23-06ea-4865-b79d-456d450690d8.trayapp.io";

  try {
    const requestBody = {
      trigger_type: "slack_channels_list",
    };

    const response = await fetch(url, {
      method: "POST", // Note the lowercase "method" and other properties
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Convert request body to JSON string
    });

    const responseData = await response.json(); // Parse response JSON

    if (!responseData) {
      throw new Error("Failed to fetch contract types");
    }

    return res.json(responseData);
  } catch (error) {
    console.error("Error fetching contract types:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/create_solution", async (req, res) => {
  // Change method from app.get to app.post
  const url = "https://be0a8cad-8795-4b79-aa04-a0ba24938127.trayapp.io";
  // console.log(req);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // Use requestBody instead of req.body
    });
    // console.log(response.status);
    if (response.status == 200) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
    const responseData = await response.json();
    console.log(responseData);

    if (!responseData) {
      throw new Error("Failed to fetch contract types");
    }

    return res.json(responseData);
  } catch (error) {
    console.error("Error fetching contract types:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/get_instances", async (req, res) => {
  const url = "https://a15c1e23-06ea-4865-b79d-456d450690d8.trayapp.io";
  console.log(req.body);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // Stringify req.body if it's an object
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const responseData = await response.json();
    console.log(responseData);

    return res.json(responseData); // Send response data to the client
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
