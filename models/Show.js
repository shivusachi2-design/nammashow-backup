const mongoose = require('mongoose');

const SeatSchema = new mongoose.Schema({
  seatNo: String,
    price: Number,
      section: String,
        status: { type: String, enum: ['available','booked'], default: 'available' }
        });

        const ShowSchema = new mongoose.Schema({
          title: String,
            venue: String,
              datetime: Date,
                seatMap: [SeatSchema],
                }, { timestamps: true });

                module.exports = mongoose.model('Show', ShowSchema);
                
