import schedule from "node-schedule";
// import { schedule } from "node-cron";

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
const job = schedule.scheduleJob("* * * * * *", () => {
  console.log("Running a task every second!");
});
setInterval(() => {
  schedule.gracefulShutdown();
  console.log("Graceful Shutdown!");
}, 10000);
