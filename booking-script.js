// Booking Management Animation
class BookingAnimation {
    constructor() {
        this.demoScreen = document.getElementById('demo-screen');
        this.isAnimating = false;
        this.init();
    }

    init() {
        if (this.demoScreen) {
            this.startAnimation();
        }
    }

    startAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // Clear the screen
        this.demoScreen.innerHTML = '';
        
        // Show calendar screen
        this.showCalendarScreen();
    }

    showCalendarScreen() {
        const calendarScreen = document.createElement('div');
        calendarScreen.className = 'calendar-screen';
        
        calendarScreen.innerHTML = `
            <div class="calendar-header">
                <div class="calendar-title">Smart Calendar</div>
                <div class="calendar-date">September 2025</div>
            </div>
            <div class="calendar-grid">
                <div class="calendar-day">S</div>
                <div class="calendar-day">M</div>
                <div class="calendar-day">T</div>
                <div class="calendar-day">W</div>
                <div class="calendar-day">T</div>
                <div class="calendar-day">F</div>
                <div class="calendar-day">S</div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day">1</div>
                <div class="calendar-day">2</div>
                <div class="calendar-day">3</div>
                <div class="calendar-day">4</div>
                <div class="calendar-day">5</div>
                <div class="calendar-day">6</div>
                <div class="calendar-day">7</div>
                <div class="calendar-day">8</div>
                <div class="calendar-day">9</div>
                <div class="calendar-day">10</div>
                <div class="calendar-day">11</div>
                <div class="calendar-day">12</div>
                <div class="calendar-day">13</div>
                <div class="calendar-day">14</div>
                <div class="calendar-day today" id="selected-date">15</div>
                <div class="calendar-day">16</div>
                <div class="calendar-day">17</div>
                <div class="calendar-day">18</div>
                <div class="calendar-day">19</div>
                <div class="calendar-day">20</div>
                <div class="calendar-day">21</div>
            </div>
            <div class="time-slots" id="time-slots" style="display: none;">
                <div class="time-slots-header">
                    <h4>Available Time Slots - September 15</h4>
                </div>
                <div class="time-slots-list" id="time-slots-list">
                    <!-- Time slots will be added here -->
                </div>
            </div>
            <div class="appointment-list" id="appointment-list" style="display: none;">
                <!-- Appointments will be added here -->
            </div>
        `;

        this.demoScreen.appendChild(calendarScreen);

        // Start the animation sequence
        this.animateCalendarInteraction();
    }

    animateCalendarInteraction() {
        const selectedDate = document.getElementById('selected-date');
        const timeSlots = document.getElementById('time-slots');
        const appointmentList = document.getElementById('appointment-list');

        // Step 1: Show click animation on selected date
        setTimeout(() => {
            selectedDate.style.transform = 'scale(1.2)';
            selectedDate.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.5)';
        }, 1000);

        // Step 2: Hide calendar and show time slots
        setTimeout(() => {
            const calendarGrid = document.querySelector('.calendar-grid');
            calendarGrid.style.display = 'none';
            timeSlots.style.display = 'block';
            this.animateTimeSlots();
        }, 2000);

        // Step 3: Show appointments after time slots
        setTimeout(() => {
            timeSlots.style.display = 'none';
            appointmentList.style.display = 'block';
            this.animateAppointments();
        }, 6000);

        // Restart animation after completion
        setTimeout(() => {
            this.isAnimating = false;
            this.startAnimation();
        }, 12000);
    }

    animateTimeSlots() {
        const timeSlotsList = document.getElementById('time-slots-list');
        
        const slots = [
            { time: '9:00 AM', available: true },
            { time: '10:30 AM', available: false },
            { time: '12:00 PM', available: true },
            { time: '1:30 PM', available: true },
            { time: '3:00 PM', available: false },
            { time: '4:30 PM', available: true },
            { time: '6:00 PM', available: true }
        ];

        timeSlotsList.innerHTML = '';

        slots.forEach((slot, index) => {
            setTimeout(() => {
                const slotElement = document.createElement('div');
                slotElement.className = `time-slot ${slot.available ? 'available' : 'booked'}`;
                slotElement.style.opacity = '0';
                slotElement.style.transform = 'translateY(20px)';
                
                slotElement.innerHTML = `
                    <div class="slot-time">${slot.time}</div>
                    <div class="slot-status">${slot.available ? 'Available' : 'Booked'}</div>
                `;

                timeSlotsList.appendChild(slotElement);

                // Animate in
                setTimeout(() => {
                    slotElement.style.transition = 'all 0.5s ease';
                    slotElement.style.opacity = '1';
                    slotElement.style.transform = 'translateY(0)';
                }, 100);

            }, index * 300);
        });
    }

    animateAppointments() {
        const appointmentList = document.getElementById('appointment-list');
        
        const appointments = [
            {
                time: '9:00 AM',
                client: 'Sarah Johnson',
                service: 'Gel Nails & Polish',
                status: 'Confirmed'
            },
            {
                time: '10:30 AM',
                client: 'Emma Davis',
                service: 'Professional Makeup',
                status: 'Confirmed'
            },
            {
                time: '2:00 PM',
                client: 'Lisa Chen',
                service: 'Eyebrow Threading',
                status: 'Confirmed'
            },
            {
                time: '3:30 PM',
                client: 'Jessica Miller',
                service: 'Eyelash Extensions',
                status: 'Pending'
            }
        ];

        appointments.forEach((appointment, index) => {
            setTimeout(() => {
                const appointmentElement = document.createElement('div');
                appointmentElement.className = 'appointment-item';
                appointmentElement.style.opacity = '0';
                appointmentElement.style.transform = 'translateY(20px)';
                
                appointmentElement.innerHTML = `
                    <div class="appointment-time">${appointment.time}</div>
                    <div class="appointment-details">
                        <div class="appointment-client">${appointment.client}</div>
                        <div class="appointment-service">${appointment.service}</div>
                    </div>
                    <div class="appointment-status">${appointment.status}</div>
                `;

                appointmentList.appendChild(appointmentElement);

                // Animate in
                setTimeout(() => {
                    appointmentElement.style.transition = 'all 0.5s ease';
                    appointmentElement.style.opacity = '1';
                    appointmentElement.style.transform = 'translateY(0)';
                }, 100);

            }, index * 800);
        });
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BookingAnimation();
});

// Fallback for if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BookingAnimation();
    });
} else {
    new BookingAnimation();
}
