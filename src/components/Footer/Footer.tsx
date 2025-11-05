import { Text } from "../Text/Text";

export default function Footer() {
    return (
        <div className="flex items-center justify-center py-10 gap-4 flex-col">
            <Text variant="body">
                &copy; 2025 Androji. All rights reserved.
            </Text>
            <Text variant="body">
                Alejandro Imperial.
            </Text>
        </div>
    );
};