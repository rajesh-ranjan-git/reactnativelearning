// import schedule from "node-schedule";
import { schedule } from "node-cron";

// From node-schedule
// const job = schedule.scheduleJob("* * * * * *", () => {
//   console.log("Running a task every second!");
// });

// From node-cron
// const job = schedule("* * * * * *", () => {
//   console.log("Running a task every second!");
// });

// From node-schedule
// const job = schedule.scheduleJob("* * * * *", () => {
//   console.log("Running a task every minute!");
// });

// From node-cron
// const job = schedule("* * * * *", () => {
//   console.log("Running a task every minute!");
// });

// From node-schedule
// const job = schedule.scheduleJob("30 * * * *", () => {
//   console.log("Running a task every 30 minute!");
// });

// From node-cron
// const job = schedule("30 * * * *", () => {
//   console.log("Running a task every 30 minute!");
// });

// From node-schedule
// const job = schedule.scheduleJob("10 * * * * *", (fireDate) => {
//   console.log(
//     `This job was supposed to run at ${fireDate} but instead ran at ${new Date()}`
//   );
// });

// From node-cron
// const job = schedule("10 * * * * *", (fireDate) => {
//   console.log(
//     `This job was supposed to run at ${fireDate} but instead ran at ${new Date()}`
//   );
// });

// From node-schedule
// const date = new Date(2025, 1, 20, 20, 5, 0);
// const job = schedule.scheduleJob(date, () => {
//   console.log(`This job is supposed to run at a specific time : ${date}.`);
// });

// From node-cron
// This one is not working with node-cron, will check later
// const date = new Date(2025, 1, 20, 20, 35, 0);
// const job = schedule(date.toDateString(), () => {
//     console.log(`This job is supposed to run at a specific time : ${date}.`);
// });

// From node-schedule
// Specific Recurrence Rule Scheduling
// Run every 15 minutes after the hour
// const rule = new schedule.RecurrenceRule();
// rule.minute = 15;
// const job = schedule.scheduleJob(rule, () => {
//   console.log(`This job is supposed to run every 15 minutes after the hour.`);
// });

// From node-cron
// This one is not working with node-cron, will check later
// Specific Recurrence Rule Scheduling
// Run every 15 minutes after the hour
// const rule = new RecurrenceRule();
// rule.minute = 36;
// const job = schedule(rule, () => {
//   console.log(`This job is supposed to run every 36 minutes after the hour.`);
// });

// From node-schedule
// const job = schedule.scheduleJob({ hour: 1, minute: 40, dayOfWeek: 4 }, () => {
//   console.log(`This job is supposed to run every 1 hour 40 minutes.`);
// });

// From node-schedule
// Set StartTime and EndTime
// Run after 5 seconds and stop after 10 seconds
// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 10000);
// const job = schedule.scheduleJob(
//   {
//     start: startTime,
//     end: endTime,
//     rule: "*/1 * * * * *",
//   },
//   () => {
//     console.log("Time for dinner!");
//   }
// );

// From node-schedule
// This no longer works as server will keep on running
// const job = schedule.scheduleJob("* * * * * *", () => {
//   console.log("Running a task every second!");
// });
// setInterval(() => {
//   schedule.gracefulShutdown();
//   console.log("Graceful Shutdown!");
// }, 10000);

async function setExpoPushToken(req: Request, res: Response): Promise<void> {
  try {
    const { userId, expoPushToken } = req.body;

    if (!userId || !isValidObjectId(userId)) {
      res.status(404).json({ message: "UserId not valid" });
      return;
    }

    const user = await User.findById(userId);

    if (user) {
      const updatedData = await User.findByIdAndUpdate(
        { _id: userId },
        { expoPushToken: expoPushToken }
      );
    }
  } catch (err) {
    res.status(500).send({ result: false, message: err.message });
  }
}

// Function to send reminders
const sendReminderNotifications = async () => {
  const now1 = new Date();
  console.log("I am running", now1);
  try {
    const now = new Date();
    console.log("now : ", now);
    const reminderTime = new Date(now.getTime() + 30 * 60000);
    console.log("reminderTime : ", reminderTime);
    console.log(
      `date - reminderTime.toISOString().split("T")[0] : , ${
        reminderTime.toISOString().split("T")[0]
      }`
    );
    console.log(
      `startTime - reminderTime.toTimeString().split(" ")[0] : , ${
        reminderTime.toTimeString().split(" ")[0]
      }`
    );
    // const upcomingSessions = await SessionRequestModel.find({
    //   status: "confirmed",
    //   date: reminderTime.toISOString().split("T")[0],
    //   startTime: { $gte: reminderTime.toTimeString().split(" ")[0] },
    // });

    // for (const session of upcomingSessions) {
    //   const participants = session.participants;
    //   const messages = [];
    //   for (const userId of participants) {
    //     const user = await User.findById(userId);
    //     if (
    //       user &&
    //       user.expoPushToken &&
    //       Expo.isExpoPushToken(user.expoPushToken)
    //     ) {
    //       messages.push({
    //         to: user.expoPushToken,
    //         sound: "default",
    //         body: `Reminder: Your session on ${session.topic} is starting soon in 30 minutes!`,
    //         data: { session },
    //       });
    //     }
    //   }
    //   const chunks = expo.chunkPushNotifications(messages);
    //   const tickets = [];
    //   for (const chunk of chunks) {
    //     const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
    //     tickets.push(...ticketChunk);
    //   }
    //   console.log("Sent reminders");
    // }
  } catch (error) {
    console.error("Error sending reminder notifications", error);
  }
};

const job = schedule("* * * * *", sendReminderNotifications); // This job runs every 1 min and send reminders to people who has upcoming session in 30 mins
