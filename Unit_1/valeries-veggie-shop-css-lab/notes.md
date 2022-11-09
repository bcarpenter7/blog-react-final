# NOTES

### Note on web accessibility in regard to form labels:

Wrapping `input`s in `label`s provides a very poor experience in screenreaders
and from accessibility perspective it is considered poor practice to not
use the `for` attribute in a label.

Why is this important?
In 2008 Target was sued by the National Federation of the Blind because
its website was not accessible to visually impaired people who used
screenreaders to experience the web. The total cost to Target was well
over $13 Million:

- Class damages of $6 million
- Plaintiff legal fees over $3.7 million
- Undisclosed defense legal fees (estimated to be nearly $4 Million)
- Additionally, they were subject to court oversight of their website for
several years.

In addition to be subjected to 3rd party lawsuits, companies can be fined
under the American's with Disabilities Act (ADA). In a recent case against
Winn-Dixie, the courts ruled in favor of the Department of Justice who had
argued that "discrimination applies to the provision of goods and services
of a place of public accommodation, rather than just those goods and services
at or in a place of public accommodation."

In addition to risk mitigation, I think it's our obligation to point out that
it is simply the right thing to do. The WHO reported in 2012 that there were
285 million visually impaired people in the world, of them 39 million are
completely blind.
