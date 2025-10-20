// checklist.spec.ts
import { test, expect } from '@playwright/test';

test('checklist page has title', async ({ page }) => {
  await page.goto('/');
  const title = page.getByTestId('title');
  await expect(title).toHaveText('Progress Checklist');
});
