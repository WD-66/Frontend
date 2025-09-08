import { z } from 'zod/v4';

const sampleUser = {
  id: 1,
  name: 'John',
  email: 'JOHN@gmail.com',
};

//Define a Zod Schema
const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.email('Pls enter a valid email').toLowerCase(),
  //   isAdmin: z.boolean().default(false),
});

const UserSchemaArray = z.array(UserSchema);

type User = z.infer<typeof UserSchema>;

// const values = UserSchema.safeParse(sampleUser);
// console.log(values);

// Values will have properties success, error, data
const fetchUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const resData = await response.json();

    const { success, data, error } = UserSchemaArray.safeParse(resData);

    if (!success) {
      console.log(error?.message);
      throw new Error('Failed to fetch');
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchUser();
