const { nugo_data } = require("../data");
const { searchText } = require("../searchText");

const expectFirst = (searchTerm, firstResultTitle) => {
  it("works on " + searchTerm, () => {
    expect(searchText(nugo_data)(searchTerm)[0].value.title).toEqual(firstResultTitle)
  });
};

describe("searching data.js with searchText.js", () => {
  expectFirst("regis", "Class Registration");
  expectFirst("reg", "Class Registration");
  expectFirst("class", "My Schedule");
  expectFirst("co-op", "Co-op Self Assessment Site");
  expectFirst("co-op-se", "NUCareers");
  expectFirst("nuca", "NUCareers");
  expectFirst("mai", "Husky Mail");
  expectFirst("hous", "Housing Online");
  expectFirst("audit", "My Degree Audit");
  expectFirst("coun", "Advising Appointments");
  expectFirst("fin", "My Financial Aid Status");
  expectFirst("fas", "FAFSA");
  expectFirst("faf", "FAFSA");
  expectFirst("hours", "NU Dining Hours");
  expectFirst("pay", "Make a Payment with NUPay");
  expectFirst("bill", "Make a Payment with NUPay");
  expectFirst("work", "Student Employment (workstudy, timesheets)");
  expectFirst("work-re", "Facilities Online Work Request");
});
