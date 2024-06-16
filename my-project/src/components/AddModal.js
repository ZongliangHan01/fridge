import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import api from '../api/apiConfig';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "./AuthProvider";

const AddModal = ({setRefresh}) => {
  const {uid} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
        // name: "",
        // quantity: "",
        buyDate:  new Date().getDate() + "/" + (new Date().getMonth()+1)+ "/" + new Date().getFullYear(),
        // expiration: "",
        location: "cooler",
    }
  });
  

  const onSubmit = async (data) => {
    try { 
      api.post(
        `/fridge/${uid}`, {
            name: data.name,
            quantity: data.quantity,
            buyDate: data.buyDate,
            expiration: data.expiration,
            location: data.location          
        })
        .then(() => {
            console.log("Item added");
            setRefresh(true);
        }
        
    );
  
    } catch (error) {
        setError("root", {
            message: "Something went wrong. Please try again later"
        })
    }
    
  };


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        quantity: "",
        buyDate:  new Date().getDate() + "/" + (new Date().getMonth()+1)+ "/" + new Date().getFullYear(),
        expiration: "",
        location: "cooler",
      });
    }
    
  
  }, [reset, isSubmitSuccessful])

  return (
      <div className="w-2/3 h-2/3 border rounded-lg p-5 bg-blue-500 bg-opacity-50">
        <div className="mb-4">Add a new item in your fridge</div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="">Name: </label>
              <input
                {...register("name", {
                  required: "You must specify a name",
                })}
                type="text"
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Quantity: </label>
              <input
                {...register("quantity", {
                  required: "You must specify a quantity",
                  validate: (value) => {
                    // check if the value is a number
                    return !isNaN(value) || "Quantity must be a number";
                  },
                })}
                type="text"
              />
              {errors.quantity && (
                <div className="text-red-500">{errors.quantity.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Buy Date: </label>
              <input
                {...register("buyDate", {
                  required: "You must specify a buy date",
                })}
                type="text"
              />
              {errors.buyDate && (
                <div className="text-red-500">{errors.buyDate.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Expiration Date: </label>
              <input
                {...register("expiration", {
                  required: "You must specify an expiration date",
                })}
                type="text"
              />
              {errors.expiration && (
                <div className="text-red-500">{errors.expiration.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label>Location: </label>
              <input
                {...register("location", {
                  required: true,
                })}
                type="text"
              />
              {errors.location && (
                <div className="text-red-500">errors.location.message</div>
              )}
            </div>

            <div className="flex flex-row justify-center">
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
                    {isSubmitting ? 
                        <CircularProgress size={25}/>
                        : "Add"}
                    
                </Button>
            </div>
            {errors.root && <div className="text-red-500">{errors.root.message}</div>}
          </form>
        </div>
        <div className="flex flex-row justify-center">
          {/* <Button type="submit" variant="contained" color="primary">Add</Button> */}
        </div>
      </div>
  );
};

export default AddModal;