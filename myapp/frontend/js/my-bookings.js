// my-bookings.js
//
// Renders the list of bookings on my-bookings.html and lets the
// user cancel a booking. Use rooms.js as your reference.

async function renderBookings() {
  const container = document.getElementById("bookings-list");

  // TODO:
  // 1. Call getBookings() from api.js
  // 2. If there are no bookings, show a friendly message
  // 3. Otherwise, build one .booking-item div per booking, each with:
  //    - room name / id, club name, date, start-end time, purpose
  //    - a "Cancel" button with a data-id attribute set to the booking id
  // 4. Set container.innerHTML to the joined HTML
  // 5. Attach click listeners to each "Cancel" button that call
  //    handleCancelClick(bookingId)
  const bookings = await getBookings();

  if (bookings.length === 0)
  {
    container.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  const room = await getRooms()
  const bookingItems = bookings.map((booking) => {
    const room = rooms.find(item) => item.id === booking.roomId);
    const roomName = room ? room.name : booking.roomId;

    return
      <div class= "booking-item">
        <div>
          <h2>$(roomName)</h2>
          <p><strong>Room Id:</strong> $(booking.roomId)</p>
          <p><strong>Club:</strong> $(booking.clubName)</p>
          <p><strong>Date:</strong> $(booking.date)</p>
          <p><strong>Time:</strong> $(booking.startTime) $(booking.endTime)</p>
          <p><strong>Purpose:</strong> $(booking.purpopse || "Not specified")</p>
        </div>
      ';
  }
  const bookingItem = bookings.map((booking) => 
    {
      const room = await getRoomById(booking.roomID);
      return
      <div class="booking-item">
        <h3>$(room.name)</h3>
        <p>Club: $(booking.clubName)</p>
        <p>Date: $(booking.date)</p>
        <p>Time: $(booking.startTime)</p>
        <p>Purpose: $(booking.purpose)</p>
        <button data id="$(booking.id)"></button>
     </div>;
    }
  )
  const cancelButtons = document.querySelectorAll("#bookings-list button[data-id]");
  cancelButtons.forEach((Button) =>

  )
  container.innerHTML = "<p>TODO: implement renderBookings()</p>";
}

async function handleCancelClick(bookingId) {
  // TODO:
  // 1. Call deleteBooking(bookingId) from api.js
  // 2. Re-render the bookings list (call renderBookings() again)
  await deleteBooking(bookingId);
  await renderBooking();
}

document.addEventListener("DOMContentLoaded", renderBookings);
