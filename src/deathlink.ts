import type { Client } from "archipelago.js";

let enabled = false;
let client: Client | null = null;

export function setDeathLinkEnabled(cl: Client, mini: boolean | null | undefined, value: boolean | null | undefined): void {
    client = cl;
    enabled = ((value ?? false) && (mini ?? false));
    if (enabled) cl.deathLink.enableDeathLink();
}

export function sendDeathLink(cause?: string): void {
    if (!enabled || !client) return;
    client.deathLink.sendDeathLink(client.players.self.name, cause);
}