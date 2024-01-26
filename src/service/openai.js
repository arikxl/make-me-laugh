const _0x2acd8a=_0x20a1;function _0x205b(){const _0xa62e83=['349930cxrqMF','1116801jfNKdf','112KyfoVt','7956368drfiWd','201033HQFzoz','169392MlJYrO','3300829FAnpPj','1234567890,mnbvcx1234567','70360NrJXSg','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'];_0x205b=function(){return _0xa62e83;};return _0x205b();}function _0x20a1(_0x5bc645,_0x51acde){const _0x205bf4=_0x205b();return _0x20a1=function(_0x20a15f,_0xe934bc){_0x20a15f=_0x20a15f-0x131;let _0xaf9ec9=_0x205bf4[_0x20a15f];return _0xaf9ec9;},_0x20a1(_0x5bc645,_0x51acde);}(function(_0x44b823,_0x238ae9){const _0x2df2d3=_0x20a1,_0x2f3223=_0x44b823();while(!![]){try{const _0x93ad78=parseInt(_0x2df2d3(0x136))/0x1+-parseInt(_0x2df2d3(0x132))/0x2+parseInt(_0x2df2d3(0x133))/0x3+-parseInt(_0x2df2d3(0x134))/0x4*(-parseInt(_0x2df2d3(0x13a))/0x5)+-parseInt(_0x2df2d3(0x137))/0x6+parseInt(_0x2df2d3(0x138))/0x7+-parseInt(_0x2df2d3(0x135))/0x8;if(_0x93ad78===_0x238ae9)break;else _0x2f3223['push'](_0x2f3223['shift']());}catch(_0x3517e4){_0x2f3223['push'](_0x2f3223['shift']());}}}(_0x205b,0x3ade0));import _0x25f89d from'openai';const key=_0x2acd8a(0x139),openai=new _0x25f89d({'apiKey':_0x2acd8a(0x131),'dangerouslyAllowBrowser':!![]});



export const rateTheJoke = async (joke) => {

  try {
    const result = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `Please rate this joke between 1-10.
              just give me the number.
              dont write any words. just a number.
              the joke is: ${joke}`
    });

    if (!result.choices?.[0]?.text) throw new Error('Invalid response');
    const rate = result.choices[0].text;
    return  +rate

  } catch (error) {
    console.error(error)
  }
}

// export async function rateTheJoke11() {
//   const completion = await openai.chat.completions.create({
//     messages: [{"role": "system", "content": "You are a helpful assistant."},
//         {"role": "user", "content": "Who won the world series in 2020?"},
//         {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//         {"role": "user", "content": "Where was it played?"}],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }
