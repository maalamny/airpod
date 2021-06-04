describe("First steps with WebdriverIO", () => {

    it("Load example website", () => {
        browser.url("/");
        browser.pause(3000);
        //expect(browser).toHaveUrl("https://reorg.com/");
        //expect(browser).toHaveTitle("Home - Reorg");
    })

     it.skip("Verify sign in button is visible", () => {
         const signInButton = $("#signin-nav");
         expect(signInButton).toBeVisible();
        
     })

     it.skip("Verify Request A Trial page is accessable", () => {
         const button = $(".navbar-nav > a:nth-child(1)");
         button.click();
         expect(browser).toHaveTitle("Request A Trial - Reorg");
        

     } )
    
})
