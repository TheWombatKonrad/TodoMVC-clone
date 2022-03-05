using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace TodoTester
{

    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = @"C:\";
        private const string todoURL = "https://thewombatkonrad.github.io/TodoMVC-clone/";

        private EdgeDriver browser;

        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            browser.Url = todoURL;
        }

        [TestMethod]
        public void CheckTitle()
        {
            Assert.AreEqual("TodoMVC", browser.Title);
        }

        [TestMethod]
        public void CheckAddTodo()
        {
            var searchInput = browser.FindElementByCssSelector("#new-todo");

            searchInput.SendKeys("Test");
            searchInput.SendKeys(Keys.Enter);

            Assert.AreEqual("Test", browser.FindElementByCssSelector(".todo label"));
        }

        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }//class

}
