# Li'l Sebastian's CITES Monitoring Tool

This project was created as part of the Helsinki Zoohackathon 2019. More details are available on [Devpost](https://devpost.com/software/li-l-sebastian).

## Inspiration
Our team mascot, Li'l Sebastian, from the popular sitcom Parks and Recreation, represents the importance of monitoring and caring for all of earth's species, particularly those who are often forgotten. We were motivated by the passion that Li'l Sebastian inspired in the citizens of Pawnee and we strive to incite the same levels of passion within the scientific community.
## What it does
To scale down the overall demand of trafficked plants, this tool identifies sellers and offers of CITES listed plant species through popular e-commerce sites. It intends to reduce the amount of manual labour performed by law enforcement individuals and CITES staff.
## How we built it
We used a scraper to identify the relevant postings on alibaba, which then fed into a json file. The data was then used to populate the Progressive Web App (PWA) built with ReactJS.
## Challenges we ran into
We had to simplify our overall design in order to have a final product that generated web information. We also did not have access to the mnps data, which required alternative solutions.
## Accomplishments that we're proud of
- Developing a scraper for alibaba
- Building a PWA with ReactJS

## What we learned
- How to create a scraper
- CITES
- Building a PWA
- Teamwork
- Time management

## What's next for Li'l Sebastian
The plan is to run the scraper once a day in the background so the information will be updated constantly. With that, it would provide information about changing supply and demand levels. Additionally users are able to manually refresh the contents of the page.

We'd like to add a map of locations where products are offered in order to generate statistics about the most common suppliers of certain plant products geographically. We would also like to let users that are logged in, flag links that show products that do not contain any plant parts (for example paintings) in order to train a machine learning model to distinguish between relevant and irrelevant links.
