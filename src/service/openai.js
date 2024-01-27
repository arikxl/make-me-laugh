import OpenAI from 'openai';

function hideString(str) {
  return str.split('').reverse().join('');
}

const hiddenString = hideString('VBK8lMmy1jA6TAtDuqYbJFkblB3TCFmCMYbQwy0rlc6PRFog-ks');

const openai = new OpenAI({
  apiKey: hiddenString,
  // apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true
});


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
