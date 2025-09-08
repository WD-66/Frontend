import { z } from 'zod/v4';

// Sample user object to validate
const sampleUser = {
  id: 1,
  name: 'John',
  email: 'JOHN@gmail.com',
};

// Define a Zod schema for a user object
const UserSchema = z.object({
  id: z.number(), // id must be a number
  name: z.string().min(1), // name must be a non-empty string
  email: z.email('Pls enter a valid email').toLowerCase(), // email must be valid and lowercase
  // isAdmin: z.boolean().default(false), // (optional) boolean with default value
});

// Define a schema for an array of users
const UserSchemaArray = z.array(UserSchema);

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Example of validating a single user
const values = UserSchema.safeParse(sampleUser);
console.log(values);

//--------------------------

// Function to fetch and validate users from an API
const fetchUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const resData = await response.json();

    // Validate the fetched data against the schema
    const { success, data, error } = UserSchemaArray.safeParse(resData);

    if (!success) {
      // If validation fails, log the error
      console.log(error?.message);
      throw new Error('Failed to fetch');
    }

    // If validation passes, return the data
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchUser();
