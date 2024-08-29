
import { connectDB } from "../../../../lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // Extract query parameters
    const url = new URL(request.url);
    const email = url.searchParams.get('email');

    if (!email) {
      return NextResponse.json({ message: "Email parameter is missing" }, { status: 400 });
    }

    // Connect to the database
    const db = await connectDB();
    const bookingsCollection = db.collection('appointment');

    // Fetch bookings for the given email
    const myBookings = await bookingsCollection.find({ email }).toArray();

    if (myBookings.length === 0) {
      return NextResponse.json({ message: "No bookings found" }, { status: 404 });
    }

    return NextResponse.json({ myBookings });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}