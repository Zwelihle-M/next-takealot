import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import {signIn, useSession} from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getError } from "../utils/error";
import { useRouter } from "next/router";

// import { redirect } from "next/dist/server/api-utils";

export default function LoginScreen() {

  const {data: session} = useSession();


  const router = useRouter();
  const {redirect} = router.query;

  useEffect(()=>{

    if( session?.user){
      router.push(redirect || "/")

    }

  },[redirect, router, session?.user])
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try{

      const result = await signIn("credentials",{
        redirect: false,
        email,
        password,
      });

      if(result.error){
        toast.error(result.error);
      }

    }catch(err){
      toast.error(getError(err))

    }

  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email Address",       pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter a valid Email Address',
              },
            })}


            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (<div className="text-red-400">{errors.email.message}</div>)}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password",{
              required:"Please enter your password", minLength:{
                value: 6, message:"Password must be at least 6 characters"
              }
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>{
            errors.password &&(<div className="text-red-400">{errors.password.message}</div>)
          }

        </div>

        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>

        <div className="mb-4">
          Don&apos;t have an Account? &nbsp;
          <Link href={"register"}>Register</Link>
        </div>
      </form>
    </Layout>
  );
}
