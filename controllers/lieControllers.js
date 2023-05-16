require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
prompt_string = `Pretend you are a good friend of Thienan. 
                Give two facts about Thienan. 
                Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation.
                {
                    "fact1": "first fact about Thienan",
                    "fact2": "second fact about Thienan"
                }
                The JSON response:`

exports.getTwoLies = async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt_string,
            max_tokens: 2000,
            temperature: 1,
        });
        json_string = response.data.choices[0].text;
        lies_json = JSON.parse(json_string)
        res.json(lies_json);
    }
    
    catch (error) {
        res.status(400).json({message: error.message});
    }
}
