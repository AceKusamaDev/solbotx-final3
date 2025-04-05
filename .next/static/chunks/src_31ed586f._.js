(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_31ed586f._.js", {

"[project]/src/lib/safetyFeatures.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_STOP_LOSS_CONFIG": (()=>DEFAULT_STOP_LOSS_CONFIG),
    "calculatePotentialLoss": (()=>calculatePotentialLoss),
    "checkStopLoss": (()=>checkStopLoss),
    "formatStopLossMessage": (()=>formatStopLossMessage)
});
'use client';
const DEFAULT_STOP_LOSS_CONFIG = {
    enabled: true,
    percentage: 2.5
};
const checkStopLoss = (position, currentPrice, stopLossConfig = DEFAULT_STOP_LOSS_CONFIG)=>{
    if (!stopLossConfig.enabled) {
        return false;
    }
    // For long positions (buy), trigger stop loss if price drops below threshold
    if (position.action === 'buy') {
        const stopLossThreshold = position.entryPrice * (1 - stopLossConfig.percentage / 100);
        return currentPrice <= stopLossThreshold;
    }
    // For short positions (sell), trigger stop loss if price rises above threshold
    if (position.action === 'sell') {
        const stopLossThreshold = position.entryPrice * (1 + stopLossConfig.percentage / 100);
        return currentPrice >= stopLossThreshold;
    }
    return false;
};
const formatStopLossMessage = (position, currentPrice, stopLossConfig = DEFAULT_STOP_LOSS_CONFIG)=>{
    const direction = position.action === 'buy' ? 'dropped' : 'increased';
    const threshold = position.action === 'buy' ? position.entryPrice * (1 - stopLossConfig.percentage / 100) : position.entryPrice * (1 + stopLossConfig.percentage / 100);
    return `Stop loss triggered for ${position.pair}: Price ${direction} to ${currentPrice.toFixed(2)} (${stopLossConfig.percentage}% from entry price of ${position.entryPrice.toFixed(2)})`;
};
const calculatePotentialLoss = (position, stopLossConfig = DEFAULT_STOP_LOSS_CONFIG)=>{
    const stopLossPrice = position.action === 'buy' ? position.entryPrice * (1 - stopLossConfig.percentage / 100) : position.entryPrice * (1 + stopLossConfig.percentage / 100);
    const loss = position.action === 'buy' ? (stopLossPrice - position.entryPrice) * position.amount : (position.entryPrice - stopLossPrice) * position.amount;
    return Math.abs(loss);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BotControl.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safetyFeatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/safetyFeatures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Simplified BotControl component that works with static exports
const BotControl = ({ strategyParams })=>{
    _s();
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTestMode, setIsTestMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastTrade, setLastTrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tradeHistory, setTradeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activePositions, setActivePositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stopLossConfig, setStopLossConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safetyFeatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STOP_LOSS_CONFIG"]);
    const [stopLossTriggered, setStopLossTriggered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stopLossMessage, setStopLossMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Function to start trading bot
    const startBot = async ()=>{
        if (!window.phantom?.solana?.isPhantom) {
            alert("Please connect your Phantom wallet first");
            return;
        }
        setIsRunning(true);
        setStopLossTriggered(false);
        setStopLossMessage('');
        // In a real implementation, this would connect to Jupiter API and execute trades
        // For now, we'll simulate trading activity
        if (isTestMode) {
            simulateTrading();
        } else {
            // This would be real trading in production
            alert("Real trading mode activated. In production, this would execute actual trades.");
            simulateTrading(); // Still simulate for demo purposes
        }
    };
    // Function to stop trading bot
    const stopBot = ()=>{
        setIsRunning(false);
    };
    // Function to toggle test mode
    const toggleTestMode = ()=>{
        setIsTestMode(!isTestMode);
    };
    // Function to handle stop loss
    const handleStopLoss = (position, currentPrice)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safetyFeatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkStopLoss"])(position, currentPrice, stopLossConfig)) {
            // Stop loss triggered
            const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safetyFeatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStopLossMessage"])(position, currentPrice, stopLossConfig);
            console.log(message);
            // Create exit trade
            const exitAction = position.action === 'buy' ? 'sell' : 'buy';
            const now = new Date();
            const exitTrade = {
                timestamp: now.toISOString(),
                pair: position.pair,
                action: exitAction,
                amount: position.amount,
                price: currentPrice.toFixed(2),
                strategy: 'Stop Loss',
                success: true
            };
            // Update trade history
            setLastTrade(exitTrade);
            setTradeHistory((prev)=>[
                    exitTrade,
                    ...prev
                ].slice(0, 10));
            // Remove position from active positions
            setActivePositions((prev)=>prev.filter((p)=>p.id !== position.id));
            // Set stop loss message
            setStopLossTriggered(true);
            setStopLossMessage(message);
            // In a real implementation, this would execute the actual exit trade
            return true;
        }
        return false;
    };
    // Simulate trading activity for demonstration
    const simulateTrading = ()=>{
        const interval = setInterval(()=>{
            if (!isRunning) {
                clearInterval(interval);
                return;
            }
            const now = new Date();
            const action = Math.random() > 0.5 ? 'buy' : 'sell';
            const price = parseFloat((Math.random() * 100 + 50).toFixed(2));
            const amount = parseFloat((Math.random() * strategyParams.amount).toFixed(3));
            // Create trade
            const trade = {
                timestamp: now.toISOString(),
                pair: strategyParams.pair,
                action,
                amount,
                price,
                strategy: strategyParams.type,
                success: Math.random() > 0.1
            };
            // Update trade history
            setLastTrade(trade);
            setTradeHistory((prev)=>[
                    trade,
                    ...prev
                ].slice(0, 10));
            // If trade is successful, add to active positions
            if (trade.success) {
                const newPosition = {
                    id: `pos-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                    pair: trade.pair,
                    entryPrice: price,
                    amount,
                    timestamp: trade.timestamp,
                    action: action
                };
                setActivePositions((prev)=>[
                        ...prev,
                        newPosition
                    ]);
            }
            // Check stop loss for all active positions
            setActivePositions((prev)=>{
                const updatedPositions = [
                    ...prev
                ];
                // Simulate price movement for each position
                for (const position of [
                    ...updatedPositions
                ]){
                    // Simulate current price with some random movement
                    const priceMovement = Math.random() * 6 - 3; // -3% to +3%
                    const currentPrice = position.entryPrice * (1 + priceMovement / 100);
                    // Check if stop loss should be triggered
                    handleStopLoss(position, currentPrice);
                }
                return updatedPositions.filter((p)=>!handleStopLoss(p, p.entryPrice * (1 - Math.random() * 5 / 100)));
            });
        }, 10000); // Simulate a trade every 10 seconds
        return ()=>clearInterval(interval);
    };
    // In a real implementation, this would execute an actual trade via Jupiter
    const executeTrade = async (params)=>{
        try {
            // This would be replaced with actual Jupiter API calls
            console.log("Executing trade with params:", params);
            // Simulate API response
            return {
                success: true,
                signature: "simulated_transaction_signature",
                inputAmount: params.amount,
                expectedOutputAmount: (params.amount * 1.01).toString()
            };
        } catch (error) {
            console.error("Trade execution error:", error);
            return {
                success: false,
                error: error.message || "Unknown error"
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 p-6 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "Bot Control"
            }, void 0, false, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-2",
                        children: "Test Mode:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleTestMode,
                        className: `px-3 py-1 rounded-md ${isTestMode ? 'bg-green-600' : 'bg-gray-600'}`,
                        children: isTestMode ? 'Enabled' : 'Disabled'
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    !isTestMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-red-500 text-sm",
                        children: "Warning: Real trading enabled!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-2",
                        children: "Stop Loss (2.5%):"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStopLossConfig({
                                ...stopLossConfig,
                                enabled: !stopLossConfig.enabled
                            }),
                        className: `px-3 py-1 rounded-md ${stopLossConfig.enabled ? 'bg-green-600' : 'bg-gray-600'}`,
                        children: stopLossConfig.enabled ? 'Enabled' : 'Disabled'
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4 mb-6",
                children: !isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: startBot,
                    className: "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                    children: "Start Trading"
                }, void 0, false, {
                    fileName: "[project]/src/components/BotControl.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: stopBot,
                    className: "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                    children: "Stop Trading"
                }, void 0, false, {
                    fileName: "[project]/src/components/BotControl.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 p-4 rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BotControl.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Bot is running with ",
                                strategyParams.type,
                                " strategy"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BotControl.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BotControl.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            stopLossTriggered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 bg-red-900/50 p-4 rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 bg-red-500 rounded-full mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BotControl.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-300",
                            children: stopLossMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/BotControl.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BotControl.tsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this),
            activePositions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold mb-2",
                        children: "Active Positions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 p-3 rounded-md",
                        children: activePositions.map((position)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-700 py-2 last:border-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Pair: ",
                                                position.pair
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Action: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: position.action === 'buy' ? 'text-green-500' : 'text-red-500',
                                                    children: position.action
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BotControl.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Amount: ",
                                                position.amount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Entry Price: $",
                                                position.entryPrice.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Stop Loss: $",
                                                (position.action === 'buy' ? position.entryPrice * (1 - stopLossConfig.percentage / 100) : position.entryPrice * (1 + stopLossConfig.percentage / 100)).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Time: ",
                                                new Date(position.timestamp).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 255,
                                    columnNumber: 17
                                }, this)
                            }, position.id, false, {
                                fileName: "[project]/src/components/BotControl.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this),
            lastTrade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold mb-2",
                        children: "Last Trade"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 p-3 rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Pair: ",
                                        lastTrade.pair
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Action: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: lastTrade.action === 'buy' ? 'text-green-500' : 'text-red-500',
                                            children: lastTrade.action
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BotControl.tsx",
                                            lineNumber: 277,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Amount: ",
                                        lastTrade.amount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Price: $",
                                        lastTrade.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Status: ",
                                        lastTrade.success ? 'Success' : 'Failed'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Time: ",
                                        new Date(lastTrade.timestamp).toLocaleTimeString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BotControl.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BotControl.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            tradeHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold mb-2",
                        children: "Recent Trades"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-40 overflow-y-auto",
                        children: tradeHistory.map((trade, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 p-2 rounded-md mb-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    trade.pair,
                                                    " - ",
                                                    trade.action.toUpperCase()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BotControl.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: new Date(trade.timestamp).toLocaleTimeString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BotControl.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BotControl.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    trade.amount,
                                                    " @ $",
                                                    trade.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BotControl.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: trade.success ? 'text-green-500' : 'text-red-500',
                                                children: trade.success ? 'Success' : 'Failed'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BotControl.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BotControl.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/BotControl.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BotControl.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BotControl.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BotControl.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
};
_s(BotControl, "jJaGBPnv2csc9IoOHZiP8/O2FeM=");
_c = BotControl;
const __TURBOPACK__default__export__ = BotControl;
var _c;
__turbopack_context__.k.register(_c, "BotControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BotControl.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/BotControl.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_31ed586f._.js.map