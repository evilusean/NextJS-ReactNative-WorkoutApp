import React, { useState } from "react";
import { View, TextInput, Button, Picker } from "react-native";
import { Formik } from "formik";
import axios from "axios";

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(""); // Add state for selected exercise type
  const [selectedEquipment, setSelectedEquipment] = useState("");
  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        muscle: "",
        equipment: "",
        difficulty: "",
        instructions: "",
      }}
      onSubmit={(values) => {
        axios
          .post("Your_API_Endpoint", values)
          .then((response) => {
            console.log("Form data sent successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error sending form data:", error);
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Name"
          />
          <TextInput
            onChangeText={handleChange("equipment")}
            onBlur={handleBlur("equipment")}
            value={values.equipment}
            placeholder="Equipment"
          />
          <Text>Select exercise type:</Text>
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
          >
            <Picker.Item label="Cardio" value="cardio" />
            <Picker.Item label="Strength" value="strength" />
            <Picker.Item label="Stretch" value="stretch" />
            <Picker.Item label="Calisthenics" value="calisthenics" />
          </Picker>
          <View>
            <Text>Select a muscle group:</Text>
            <Picker
              selectedValue={selectedMuscle}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMuscle(itemValue)
              }
            >
              <Picker.Item label="Core" value="core" />
              <Picker.Item label="Biceps" value="biceps" />
              <Picker.Item label="Triceps" value="triceps" />
              <Picker.Item label="Wrist" value="wrist" />
              <Picker.Item label="Quads" value="quads" />
              <Picker.Item label="Chest" value="chest" />
              <Picker.Item label="Hamstring" value="hamstring" />
              <Picker.Item label="Glutes" value="glutes" />
              <Picker.Item label="Delts" value="delts" />
              <Picker.Item label="Traps" value="traps" />
              <Picker.Item label="Lats" value="lats" />
              <Picker.Item label="Full-Body" value="full-body" />
            </Picker>
          </View>
          <View>
            <Text>Select difficulty:</Text>
            <Picker
              selectedValue={selectedDifficulty}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDifficulty(itemValue)
              }
            >
              <Picker.Item label="Beginner" value="beginner" />
              <Picker.Item label="Intermediate" value="intermediate" />
              <Picker.Item label="Expert" value="expert" />
            </Picker>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={3} // Set the number of lines to 3 for a 3-line high box
            onChangeText={handleChange("instructions")}
            onBlur={handleBlur("instructions")}
            value={values.instructions}
            placeholder="Instructions"
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ExerciseForm;

{
  /* Add more TextInput fields for type, muscle, equipment, difficulty, and instructions 
            FIX selectedValue={selectedType} for TYPE / DIFFICULTY / MUSCLE USING SAME VARIABLE NAME
            FIX USE STATE AT TOP, SOME MISSING, ("")
            ADD CSS / styles={}
            CHECK INITIAL VALUES, HOW DOES "" WORK WITH DROPDOWNS, MAYBE CHANGE DEFAULT
            CHECK FORMIK - FIRST TIME ENCOUNTERED - READ DOCS
            READ DOCS ON USESTATE - WE AREN'T USED TO USING IT YET
            CHECK onValueChange={(itemValue, itemIndex) =>
                  setSelectedMuscle(itemValue) FOR EACH, REPEATED VARIABLE USE MIGHT CLASH
            CONNECT API TO MONGODB, 
            IMPORT TO LAYOUT, CREATE A WAY TO ADD IN NEW EXERCISES AND GET TO THIS SCREEN/URL
            EDIT / DELETE FUNCTIONALITY
            TEST DB, FIGURE OUT HOW TO RAISE AN ERROR IF VALUES ARE NULL
            SEE IF WE CAN USE AXIOS OR NEED MONGOOSE/PRISMA
            FUTURE SEAN PROBLEMS, HALF WAY THERE
            AFTER IT WORKS, ADD EXERCISES
          
            OLD PRISMA CODE FROM ECOMMERCE APP(USE AS REFERENCE FOR NEW API):
import { redirect } from "next/navigation";
import prisma from "../lib/db/prisma";
import FormSubmitButton from "@/components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product Page",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw new Error("Missing required fields");
  }

  //SHADOW CLONE KAGE BUNSHIN NO JUTSU
  //for (let i = 0; i < 50; i++) {
  //  await prisma.product.create({
  //    data: { name, description, imageUrl, price },
  //  });
  //}

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Product Name"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Product Description"
          className="mb-3 w-full textarea textarea-bordered"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="mb-3 w-full input input-bordered"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input input-bordered"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}





            */
}
