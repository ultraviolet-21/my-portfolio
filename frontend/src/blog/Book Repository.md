
Historically, access to knowledge has been gatekept by **social and economic barriers.** Higher education in particular was often reserved for people who had the financial resources and social opportunities to pursue it, while others were excluded or had limited access. Educational institutions weren't just providers of knowledge; they determined who had the opportunity to receive formal instruction and credentials. Today, universities are much more inclusive, but the rising cost of college tuition and textbooks can continue to be barriers to pursuing a formal education.

However, the internet allows us to access information in the form of articles, videos, lectures, and other educational resources. Online retailers like Amazon, Abebooks, and Textbooks.com carry many textbooks required for college courses, and they tend to offer better deals than on-campus stores. Still, students may not have time to manually compare every online retailer's price to that offered at their student store. **Book Repository** is a command-line tool that would help them in this search. It allows users to search their required textbooks by **ISBN** and will return a list of retailers carrying each book, sorted by price. If the user does not know the ISBN, they can search by the title and one author. The user can check any of the retailers' sites to determine if they want that book from that retailer - and if yes, add it to cart. The user can then see what their total is.

Some retailers carry **international editions** of textbooks, which are often cheaper than the US edition. The price of these editions is typically listed in a foreign currency; therefore, Book Repository also has a built-in currency conversion tool. In addition, international students have the option to convert all prices to their home country's currency because the program allows them to select a base currency other than USD.

**A few disclaimers:**

- The project was built with a free trial of the Barcode Lookup API. It is not yet a long-term venture.
- If a textbook becomes unavailable (or unavailable at a given price), this may not be reflected in the list of retailers displayed to the user. For example, the price listed for a given retailer may not be the actual price listed on the website. This is why I have included the ability to check the website itself.
- This is primarily designed for hard copies of textbooks. Many pdf versions can be found online for free, and some courses may require a subscription to an online textbook (ex: zyBooks).

The project is entirely written in Python, and it uses the third-party library requests to call the APIs. The APIs I have used are Barcode Lookup, ISBNdb, and Open Exchange Rates.

**Example Workflow:**

1. The user will be asked how many books they want, as well as the currency.
2. For each book, the user will be asked to enter an ISBN number.
3. Alternatively, the user can enter the title and one author’s name, after which the program will show the user a list of possible books/ ISBNs.
4. The program fetches store and price data for the ISBN number and displays it. Prices will be converted to the preferred currency.
5. The user can select a store, which will open the link. The user can also add the book to a cart.
6. The program will display the total price of all the books in the cart. (A possible next step would be to incorporate a payment gateway into this system.)

Check out the code here: [ultraviolet-21/book-repository](https://github.com/ultraviolet-21/book-repository)

Check out the project in action: https://drive.google.com/file/d/1rcRwToW9FiDPxjQkjSOItjCkSk808fp1/view?usp=sharing

For this demo, I have used Database System Concepts by Silberschatz, Korth, and Sudarshan and Engineering a Compiler by Cooper and Torczon. I chose these textbooks not only because they are from courses I have taken as an undergraduate, but also because they represent system-level thinking in Computer Science. While many programming-related resources can be found online, the concepts in these books are an example of the kind of knowledge that can remain gatekept today.

Book Repository serves as a tool to help students find deals on textbooks. But ultimately, it encourages students to look for alternatives to what's offered at on-campus stores, thereby provoking their curiosity and desire to learn.