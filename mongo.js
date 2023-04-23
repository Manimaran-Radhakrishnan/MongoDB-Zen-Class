db.zen.insertMany([
  {
    users: "maran",
    topics: "mongodb",
    tasks: "find fibnocis series",
    month: "october",
    date: "18-oct-2020",
    company_drives: "hcl",
    codekata_solved: 40,
    attendance: "present",
    task_submition: "no",
    placement_go: "yes",
    mentor: ["rupan", "ragav", "magesh"],
    mentees: ["divya", "uma"]
  },
  {
    users: "praveen",
    topics: "sql",
    tasks: "find LCM of given array",
    month: "march",
    date: "1-mar-2020",
    company_drives: "zoho",
    codekata_solved: 30,
    attendance: "absent",
    task_submition: "no",
    placement_go: "no",
    mentor: ["rupan", "ragav", "magesh"],
    mentees: ["divya", "uma"]
  },

  {
    users: "mohan",
    topics: "js",
    tasks: "find even numbers",
    month: "october",
    date: "21-oct-2020",
    company_drives: "zetwork",
    codekata_solved: 10,
    attendance: "present",
    task_submition: "no",
    placement_go: "no",
    mentor: ["rupan", "ragav", "magesh"],
    mentees: ["divya", "uma"]
  },

  {
    users: "nanthu",
    topics: "html",
    tasks: "find prime numbers in an array",
    month: "october",
    date: "16-oct-2020",
    company_drives: "google",
    codekata_solved: 50,
    attendance: "absent",
    task_submition: "no",
    placement_go: "yes",
    mentor: ["rupan", "ragav", "magesh"],
    mentees: ["divya", "uma"]
  },

  {
    users: "sam",
    topics: "css",
    tasks: "design imdb database",
    month: "march",
    date: "12-mar-2020",
    company_arrived: "apple",
    codekata_solved: 90,
    attendance: "present",
    task_submition: "no",
    placement_go: "yes",
    mentor: ["rupan", "ragav", "magesh"],
    mentees: ["divya", "uma"]
  },
]);

// Find all the topics and tasks which are thought in the month of October.
db.zen.find({ month: { $in: ["october"] } }, { _id: 0, tasks: 1, topics: 1 });

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
db.zen.find(
  { date: { $gt: "15-oct-2020", $lt: "30-oct-2020" } },
  { _id: 0, company_drives: 1 }
);

// Find all the company drives and students who are appeared for the placement.
db.zen.find(
  { placement_go: { $in: ["yes"] } },
  { company_drives: 1, users: 1 }
);

// Find the number of problems solved by the user in codekata.
db.zen.aggregate([
  {
    $group: {
      _id: { users: "users" },
      totalcodekata: { $sum: "$codekata_solved" },
    },
  },
]);

// Find all the mentors with who has the mentee's count more than 15.
db.zen.find({}, { mentor: 1 });

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020.
db.zen.find(
  { date: { $gt: "15-oct-2020", $lt: "30-oct-2020" } },
  { users: 1, task_submition: "no" }
);
