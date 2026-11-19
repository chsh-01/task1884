import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

// ai-studio-step-id: pw7xqph000
await leapwork.step("Click “Accept only necessary” on the Leapwork cookie consent banner", async () => {
    // Click button "Accept only necessary"
    await page.getByRole('button', { name: 'Accept only necessary' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"onetrust-reject-all-handler\"]" });

// ai-studio-step-id: pw12qvp610
await leapwork.step("Click the BOOK A DEMO link in the site banner", async () => {
    // Click span
    await page.getByRole('banner').getByRole('link', { name: 'BOOK A DEMO' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[3]/div[3]/a/span" });

// ai-studio-step-id: pwy9v1r500
await leapwork.step("Validate the Leapwork demo page shows “Book Your Personalized Demo”", async () => {
    // Assert paragraph contains "Book Your Personalized Demo"
    await expect(page.getByText('Book Your Personalized Demo')).toContainText("Book Your Personalized Demo");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div/p" });
