const Slack = require('pico-slack');

Slack.onMessage((msg)=>{
	if(msg.isDirect && Slack.has(msg.text, ['santachat', 'santabot'])){
		Slack.msgAs('santabot', ':santa:', 'secret-santa', msg.text
			.replace('santachat', '')
			.replace('santabot', '')
			.replace('Santachat', '')
			.replace('Santabot', '')
			.trim()
		);
	}
});