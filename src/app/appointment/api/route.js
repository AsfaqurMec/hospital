import { connectDB } from "../../../../lib/connectDB";
//import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const newAppointment = await request.json();
  try {
    const db = await connectDB();
    const appointmentCollection = db.collection("appointment");
    
    
    const resp = await appointmentCollection.insertOne({...newAppointment});
    
    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};
