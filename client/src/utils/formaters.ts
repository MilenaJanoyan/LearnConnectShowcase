export function formatDateTime(isoString: string | undefined): string | undefined {
    if (!isoString) return undefined
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
}

export function SubstringText(text: string, limit: number): string {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    } else {
        return text;
    }
}