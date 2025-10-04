const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
    userId: String,
      seats: [String],
        amount: Number,
          paymentStatus: { type: String, enum: ['pending','paid','failed'], default: 'pending' },
            razorpayOrderId: String,
              razorpayPaymentId: String,
                lockKeys: [String]
                }, { timestamps: true });

                module.exports = mongoose.model('Booking', BookingSchema);
