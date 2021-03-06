import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { useParams } from "react-router-dom"


function BookingId() {
  const { id } = useParams()
  const bookingId = useFetch('http://localhost:3000/bookings/' + id)
  return bookingId && (
    <>
      <div>
        <img src="XXX" alt="experience" />
      </div>
      <div className="booking-id">
        <h4>nº reserva: {bookingId.bookingNumber}</h4>
        <h4>fecha reserva: {bookingId.bookingDate.substring(0, 10)}</h4>
        <br></br>
        <h4>experience name: </h4>
        <h4>destino: </h4>
        <h4>fecha experience: {bookingId.experienceDate}</h4>
        <h4>hora experience: {bookingId.experienceHour}</h4>
        <h4>asientos reservados: {bookingId.reservedSeats}</h4>
        <h4>precio total: {bookingId.totalPrice} €</h4>
      </div>
    </>
  )
}

const BookingIdWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <BookingId />
  </Suspense>

export default BookingIdWrapper