

const seats = document.querySelectorAll('.seat');
const seatDetails = document.getElementById('seatDetails');
let totalPrice = 0;
let availableSeats = 40; // Total available seats
let maxSeats = 4; // Maximum number of seats allowed to be selected
let cart = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener('click', function() {
        if (seat.classList.contains('selected')) {
            // If seat is already selected, deselect it
            seat.classList.remove('selected');
            totalPrice -= parseInt(seat.getAttribute('data-price'));
            availableSeats++;
            cart--;
            document.getElementById('busTicket').textContent = cart;
        } else {
            // If seat is not selected, select it
            if (maxSeats >= 4 && availableSeats > 0) {
                seat.classList.add('selected');
                totalPrice += parseInt(seat.getAttribute('data-price'));
                availableSeats--;
                cart++;
                document.getElementById('busTicket').textContent = cart;
            } else {
                alert('Maximum seats selected!');
            }
        }
        updateSeatDetails();
    });
};

function updateSeatDetails() {
    const selectedSeats = document.querySelectorAll('.selected');
    seatDetails.innerHTML = ''; // Clear previous seat details
    for (let i = 0; i < selectedSeats.length; i++) {
        const name = selectedSeats[i].getAttribute('data-name');
        const seatClass = selectedSeats[i].getAttribute('data-class');
        const price = parseInt(selectedSeats[i].getAttribute('data-price'));

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${name}</td>
        <td>${seatClass}</td>
        <td>${price}</td>
      `;
        
       seatDetails.appendChild(newRow);
        
    };

    document.getElementById('totalPrice').innerText = `${totalPrice}`;
    document.getElementById('grandTotal').innerText = `${totalPrice}`;

    document.getElementById('availableSeats').innerText = ` ${availableSeats} Seats Left`;
}


// Apply button part 
function toggleApplyButton() {
    const inputField = document.getElementById('inputField');
    const applyBtn = document.getElementById('applyBtn');

    if (inputField.value !== '') {
        applyBtn.disabled = false;
        applyBtn.style.opacity = 1; // Enable button
    } else {
        applyBtn.disabled = true;
        applyBtn.style.opacity = 0.5; // Disable button
    }
}




// grand Total calculation

document.getElementById("applyBtn").addEventListener('click', function () {
    const inputField = document.getElementById("inputField")
    const coupon = inputField.value.split(" ").join("").toUpperCase();

    if (totalPrice >= 500) {

        if (coupon === "NEW15") {
            // discount calculation
            const discountMoney15 = totalPrice * 0.15;
            const discountPrice = totalPrice * 0.85;
            // dicsountElement.innerText = discountPrice.toFixed(2);

            // grandTotal 
            const totalElement = document.getElementById("grandTotal");
            totalElement.innerText = discountPrice.toFixed(2);

            // discount money 
            const discountMoney = document.getElementById('discountMoney');
            discountMoney.innerText = discountMoney15.toFixed(2);

            const discount = document.getElementById('discount');
            discount.classList.remove('hidden');

            // button and input field remove
            const applyDiv = document.getElementById('applyDiv');
            applyDiv.classList.add('hidden');
        }
        else if (coupon === "COUPLE20") {
            // discount calculation
            const discountMoney15 = totalPrice * 0.20;
            const discountPrice = totalPrice * 0.80;
            // dicsountElement.innerText = discountPrice.toFixed(2);

            // grandTotal 
            const totalElement = document.getElementById("grandTotal");
            totalElement.innerText = discountPrice.toFixed(2);

            // discount
            const discountMoney = document.getElementById('discountMoney');
            discountMoney.innerText = discountMoney15.toFixed(2);

            const discount = document.getElementById('discount');
            discount.classList.remove('hidden');

            // button and input field remove
            const applyDiv = document.getElementById('applyDiv');
            applyDiv.classList.add('hidden');
        }
        else {
            alert("invaid Coupon.")
        }
    }
    else {
        alert('Please add at least 500')
    }
})



// Passenger data check

function checkInputs() {
    var passengerName = document.getElementById('passengerName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var email = document.getElementById('email').value.trim();
    var nextBtn = document.getElementById('nextBtn');

    if (passengerName !== '' && phoneNumber !== '' && email !== '') {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}


// Modal 

function showModal() {
    var modal = document.getElementById('myModal');
    modal.classList.remove('hidden');
}

function hideModal() {
    var modal = document.getElementById('myModal');
    modal.classList.add('hidden');
}