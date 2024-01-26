/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-func-assign */
function _0x3402(_0x323d5f,_0x324b8a){const _0x2139bb=_0x2139();return _0x3402=function(_0x3402c,_0x22ecb0){_0x3402c=_0x3402c-0xfd;let _0x15f780=_0x2139bb[_0x3402c];return _0x15f780;},_0x3402(_0x323d5f,_0x324b8a);}const _0x56c988=_0x3402;(function(_0x3e99dc,_0x512f9c){const _0xadcc7d=_0x3402,_0x1ea66f=_0x3e99dc();while(!![]){try{const _0x4990a3=parseInt(_0xadcc7d(0x102))/0x1+parseInt(_0xadcc7d(0xfe))/0x2+-parseInt(_0xadcc7d(0x106))/0x3*(-parseInt(_0xadcc7d(0x100))/0x4)+parseInt(_0xadcc7d(0x101))/0x5+-parseInt(_0xadcc7d(0x105))/0x6+-parseInt(_0xadcc7d(0x104))/0x7*(parseInt(_0xadcc7d(0xff))/0x8)+parseInt(_0xadcc7d(0xfd))/0x9*(-parseInt(_0xadcc7d(0x103))/0xa);if(_0x4990a3===_0x512f9c)break;else _0x1ea66f['push'](_0x1ea66f['shift']());}catch(_0x2e0561){_0x1ea66f['push'](_0x1ea66f['shift']());}}}(_0x2139,0xbe125));import _0x7239c2 from'openai';const openai=new _0x7239c2({'apiKey':_0x56c988(0x107),'dangerouslyAllowBrowser':!![]});function _0x2139(){const _0xa384c2=['649565KmSURa','43370UvsjhB','7gMyqJg','4453350GouAKF','20742umrySS','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','1719vXxTgz','590606GxnRyR','956504ZUSFwj','724dKnynC','1361930DOLhyy'];_0x2139=function(){return _0xa384c2;};return _0x2139();}


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
