const getSpendingReportHandler = {
  GetSpendingReportIntent: function() {
    const intentObj = this.event.request.intent;
    let speechOutput;
    if (this.event.request.dialogState !== 'COMPLETED') {
      this.emit(':delegate');
    } else {
      speechOutput = `Your spending report from ${
        intentObj.slots.fromDate.value
      } to ${intentObj.slots.toDate.value} is six thousand dollars`;
      const cardTitle = 'Spending Report';
      const cardContent = `This is your spending report for ${
        intentObj.slots.fromDate.value
      } - ${intentObj.slots.fromDate.value}.`;
      const imageObj = {
        smallImageUrl: 'https://imgs.xkcd.com/comics/standards.png',
        largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
      };
      this.emit(
        ':tellWithCard',
        speechOutput,
        cardTitle,
        cardContent,
        imageObj
      );
    }
  }
};


module.exports = getSpendingReportHandler
