let objects = {
  name: "sagar_shrestha",
  address: "Kageshwori-Manohara",
  emails: "sagarshrestha4339@gmail.com",
  interests: "MERN Stack",
  education: [
    { name: "SrijanSheel sadan", enrolledDate: "2010" },
    { name: "National Integrated College", enrolledDate: "2012" },
    { name: "Kathford", enrolledDate: "2013" },
  ],
};

var educ = objects.education;
for (let x of educ) {
  for (let y in x) {
    process.stdout.write(y + ": " + x[y] + ", ");
  }
  console.log();
}
