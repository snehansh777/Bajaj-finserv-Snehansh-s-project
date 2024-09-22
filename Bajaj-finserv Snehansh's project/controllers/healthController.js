
// Mock user details object
const userDetails = {
  email: "su2627@srmist.edu.in",
  roll_number: "RA2111028030021",
  user_id: "snehansh777",
};

// Function to handle POST request
const handlePostRequest = (req, res) => {
  const { data, file_b64 } = req.body;

  if (!data) {
    return res
      .status(400)
      .json({ is_success: false, message: "Data is required." });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = null;

  // Process the input data
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/[a-zA-Z]/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercaseAlphabet || item > highestLowercaseAlphabet) {
          highestLowercaseAlphabet = item;
        }
      }
    }
  });

  // File validation
  let file_valid = false;
  let file_mime_type = null;
  let file_size_kb = null;

  if (file_b64) {
    const buffer = Buffer.from(file_b64, "base64");
    file_size_kb = buffer.length / 1024;
    file_valid = true; // For simplicity, assume the file is valid
    file_mime_type = "image/png";
  }

  const response = res.json({
    is_success: true,
    user_id: userDetails.user_id,
    email: userDetails.email,
    roll_number: userDetails.roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
    file_valid,
    file_mime_type,
    file_size_kb,
  });
  return response;
};

// Function to handle GET request
const getOperationCode = (req, res) => {
  const response = res.status(200).json({ operation_code: 1 });
  return response.json;
};

module.exports = {
  handlePostRequest,
  getOperationCode,
};
