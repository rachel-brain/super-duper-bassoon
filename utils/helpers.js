// THIS CODE WILL NEED CHECKING & MODIFYING!  DO WE NEED A TIME/DATE???

module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
      //   format_amount: (amount) => { //to record record or level
    //     // format large numbers with commas
    //     return parseInt(amount).toLocaleString();
    //   },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
};