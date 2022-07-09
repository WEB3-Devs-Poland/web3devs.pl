export const hashEllipsis = (account: string) => {
  if (!account) return '';

  return `${account.slice(0, 5)}...${account.slice(account.length - 4)}`;
};
