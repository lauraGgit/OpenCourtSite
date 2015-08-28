---
layout: page
title: About
permalink: /about/
---


The OpenCourt project is an open data advocacy and visualization project featuring United Supreme Court cases.

##Data Visualization
First and formost, the project is a data visualization of every Supreme Court case. In the future, the OpenCourt team hopes to release an online interactive version of the visualization. But until then, see the facts about the data section of this page to learn a little bit more about how the process of making the data visualization has lead to insights about Supreme Court case law.

##Open Case Law and Machine Readability
In building the data visualization, a lot of effort went into the production of a usable dataset, because the U.S. Judiciary does not currently publish U.S. Supreme Court cases in a machine readable format. Thus, all the cases were collected by scraping a third party site, [Justia.com](https://supreme.justia.com). Since these cases are not directly from the United States Government, it is worth restating Justia's disclaimer here:

"Disclaimer: Official Supreme Court case law is only found in the print version of the United States Reports. Justia case law is provided for general informational purposes only, and may not reflect current legal developments, verdicts or settlements. We make no warranties or guarantees about the accuracy, completeness, or adequacy of the information contained on this site or information linked to from this site. Please check official sources."

Supreme Court case law often determines the de facto enforcement and meaning of all other U.S. law, its accessibility is paramount to maintaining a vibrant and active democracy. Like democracy, the expectations accessibility should change with technological advances. In today's world, large data should be machine readable to meet those accessibility needs. For more on why machine readibility is necessary to citizen's empowerment see Jim Hendler's "A Primer on Machine Readability for Online Documents and Data" featured on [Data.gov](https://www.data.gov/developers/blog/primer-machine-readability-online-documents-and-data).

##Insights from the Data & Fun Facts
While all of this information is qualified by the previous disclaimer, a few fun facts about the data emerge.

- There are over 31,000 Supreme Court cases, with over 300,000 citations.

- There are 7,604 that appear to have no citations. 

- The average case cites about 10 cases and are cited about 10 times as well. In the 50 past years, cases cite an average of 18 cases and are cited an average of 10 times.

####Number of Citations by year after 1880
<iframe src="http://lgerhardt.com/OpenCourtSite/assets/d3.html" width="400" height="250" marginwidth="0" marginheight="0" seamless scrolling="no" frameborder="0"></iframe>


- The longest "ancestry" between cases is 35. In this case, ancestry is analagous to the network graph term of network diameter. Whereas, the average case has an ancestry of 7.35 long.

- The first volume of the Supreme Court cases were actually from the colonial court of Pennsylvania.

- There is a case named after a boat called "The Three Friends." It does not appear to have an opposing party. I guess that is what you would call frenemies.
