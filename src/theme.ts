type Theme = 'light' | 'dark';
const system = window.matchMedia('(prefers-color-scheme: dark)');
let preference: Theme | null = null;
try { const value = localStorage.getItem('ipa-theme'); if (value === 'light' || value === 'dark') preference = value; } catch { /* Theme still works when storage is unavailable. */ }
export function currentTheme(): Theme { return preference ?? (system.matches ? 'dark' : 'light'); }
function apply() {
  const theme = currentTheme();
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171b19' : '#f6f5f0');
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach(button => {
    button.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    button.setAttribute('title', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}
export function toggleTheme() { preference = currentTheme() === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('ipa-theme', preference); } catch { /* Keep in-memory preference. */ } apply(); }
export function syncTheme() { apply(); }
system.addEventListener('change', () => { if (!preference) apply(); });
window.addEventListener('storage', event => { if (event.key !== 'ipa-theme' && event.key !== null) return; preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null; apply(); });
apply();
