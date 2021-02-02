import mongoose from 'mongoose';

export const NotificationSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      defaultValue: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Notification', NotificationSchema);
