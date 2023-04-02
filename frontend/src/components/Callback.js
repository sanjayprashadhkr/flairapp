import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Callback = () => {
  console.log("HELLLOOOO");
  const { isLoading, error, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get the access token for the authenticated user
        const accessToken = await getAccessTokenSilently();

        // Check if the user already exists in your MongoDB database
        const userExists = await fetch(`/api/users?email=${user.email}`);
        if (userExists) {
          // User already exists, retrieve user details from MongoDB
          const userDetails = await fetch(`/api/users/${user.email}`);
          console.log(userDetails);
        } else {
          // Create a new user in MongoDB
          const newUser = {
            email: user.email,
            firstName: user.given_name,
            lastName: user.family_name,
            orderHistory: [],
            paymentHistory: [],
            cart: [],
          };
          const createdUser = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(newUser),
          });
          console.log(createdUser);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
      fetchUserDetails();
    }
  }, [isLoading, error, isAuthenticated, user]);

  return <div>Redirecting...</div>;
};

export default Callback;
